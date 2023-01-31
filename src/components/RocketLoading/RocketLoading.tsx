import { IoMdRocket } from 'react-icons/io';
import styled from 'styled-components/macro';
import './rocketLoading.css';


export default function RocketLoading() {
  return (
    <div className="rocket-loading">
      <Loader>
        {[...Array(20)].map((_, i) => {
          return <Dot key={`dot_${i}`} index={i} />;
        })}
        <div className='loader-rocket'>
          <IoMdRocket />
        </div>
      </Loader>
    </div>
  );
}

const Loader = styled.div`
  --speed: 1;
  --scale: 1;
  --dotColor: #fff;
  --rocketColor: #fff;

  position: relative;
  width: calc(120px * var(--scale));
  height: calc(120px * var(--scale));
`;

const Dot = styled.div<{ index: number }>`
  --i: ${(p) => p.index};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(180deg + 18deg * var(--i)));

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(15px * var(--scale));
    height: calc(15px * var(--scale));
    background-color: var(--dotColor);
    border-radius: 50%;
    transform: scale(0);
    animation: rocketFlying calc(2s / var(--speed)) linear infinite;
    animation-delay: calc(0.1s / var(--speed) * var(--i));
  }

  @keyframes rocketFlying {
    0% {
      transform: scale(0);
    }
    10% {
      transform: scale(1.2);
    }
    80%,
    100% {
      transform: scale(0);
    }
  }
`;

// const Rocket = styled.div`
//   /* background-color: brown; */
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   width: 100%;
//   height: 100%;
//   color: var(--rocketColor);
//   font-size: calc(50px * var(--scale));
//   animation: rotating calc(2s / var(--speed)) linear infinite;
//   animation-delay: calc(-1s / var(--speed));

//   svg {
//     transform: rotate(45deg);
//     position: relative;
//     top: calc(-15px * var(--scale));
//     left: calc(-15px * var(--scale));
//   }

//   @keyframes rotating {
//     0% {
//       transform: rotate(10deg);
//     }
//     100% {
//       transform: rotate(370deg);
//     }
//   }
// `;
