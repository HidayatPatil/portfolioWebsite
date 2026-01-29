import { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onLoadingComplete }) {
  const [animationStage, setAnimationStage] = useState('initial'); // initial -> step2 -> step3 -> step4 -> step5 -> step6 -> expanding -> complete

  useEffect(() => {
    // Start step 2 immediately (move squares left/right)
    const step2Timer = setTimeout(() => {
      setAnimationStage('step2');
    }, 1000);

    // Start step 3 after brief delay (move some squares further)
    const step3Timer = setTimeout(() => {
      setAnimationStage('step3');
    }, 500);

    // Start step 4 (move rb down and lt up)
    const step4Timer = setTimeout(() => {
      setAnimationStage('step4');
    }, 1000);

    // Start step 5 (move rt up and lb down)
    const step5Timer = setTimeout(() => {
      setAnimationStage('step5');
    }, 1500);

    // Start step 6 (morph square 3 and 4)
    const step6Timer = setTimeout(() => {
      setAnimationStage('step6');
    }, 2000);

    // Start the expansion animation (3 seconds after step 6)
    const expandTimer = setTimeout(() => {
      setAnimationStage('expanding');
    }, 3000);

    // After expansion completes (1 second animation), signal completion
    const completeTimer = setTimeout(() => {
      setAnimationStage('complete');
      onLoadingComplete();
    }, 4000); // 5s wait + 1s expansion

    return () => {
      clearTimeout(step2Timer);
      clearTimeout(step3Timer);
      clearTimeout(step4Timer);
      clearTimeout(step5Timer);
      clearTimeout(step6Timer);
      clearTimeout(expandTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  const getSquareClasses = (squareName) => {
    let classes = `loading-square ${squareName}`;
    
    if (animationStage === 'initial') return classes;
    
    // Step 2 movements
    if (['square-1', 'square-3', 'square-rb', 'square-rt'].includes(squareName)) {
      classes += ' move-right';
    } else {
      classes += ' move-left';
    }
    
    // Step 3 additional movements
    if (animationStage === 'step3' || animationStage === 'step4' || animationStage === 'step5' || animationStage === 'step6' || animationStage === 'expanding' || animationStage === 'complete') {
      if (['square-3', 'square-rb', 'square-rt'].includes(squareName)) {
        classes = classes.replace('move-right', 'move-right-far');
      } else if (['square-4', 'square-lt', 'square-lb'].includes(squareName)) {
        classes = classes.replace('move-left', 'move-left-far');
      }
    }
    
    // Step 4 vertical movements
    if (animationStage === 'step4' || animationStage === 'step5' || animationStage === 'step6' || animationStage === 'expanding' || animationStage === 'complete') {
      if (squareName === 'square-rb') {
        classes = classes.replace('move-right-far', 'move-right-far-down');
      } else if (squareName === 'square-lt') {
        classes = classes.replace('move-left-far', 'move-left-far-up');
      }
    }
    
    // Step 5 vertical movements
    if (animationStage === 'step5' || animationStage === 'step6' || animationStage === 'expanding' || animationStage === 'complete') {
      if (squareName === 'square-rt') {
        classes = classes.replace('move-right-far', 'move-right-far-up');
      } else if (squareName === 'square-lb') {
        classes = classes.replace('move-left-far', 'move-left-far-down');
      }
    }
    
    // Step 6 shape morphing
    if (animationStage === 'step6' || animationStage === 'expanding' || animationStage === 'complete') {
      if (squareName === 'square-3') {
        classes = classes.replace('move-right-far', 'morph-right-far');
      } else if (squareName === 'square-4') {
        classes = classes.replace('move-left-far', 'morph-left-far');
      }
    }
    
    return classes;
  };

  return (
    <div className="loading-screen">
      <div className={`loading-container ${animationStage === 'expanding' || animationStage === 'complete' ? 'expanding' : ''}`}>
        <div className={getSquareClasses('square-1')}></div>
        <div className={getSquareClasses('square-2')}></div>
        <div className={getSquareClasses('square-3')}></div>
        <div className={getSquareClasses('square-4')}></div>
        <div className={getSquareClasses('square-rb')}></div>
        <div className={getSquareClasses('square-lt')}></div>
        <div className={getSquareClasses('square-rt')}></div>
        <div className={getSquareClasses('square-lb')}></div>
      </div>
    </div>
  );
}