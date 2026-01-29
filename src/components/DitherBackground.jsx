import Dither from './Dither';

export default function DitherBackground() {
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Dither
        waveColor={[1, 0, 0]}
        disableAnimation={false}
        enableMouseInteraction={false}
        mouseRadius={0.3}
        colorNum={2.5}
        waveAmplitude={0.18}
        waveFrequency={0}
        waveSpeed={0.03}
      />
    </div>
  );
}