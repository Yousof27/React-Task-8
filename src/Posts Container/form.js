import { useState } from 'react';
import './form.css'

export default function Form() {
    const [data, setX] = useState({ xStart: 0, xCurrent: 0, xReal: 0, xOld: 0, grap: false });

    function scroll(e) {
        if (data.grap) {
            const width = e.target.clientWidth;
            const x = e.clientX;
            let copy = { ...data };
            copy.xReal = Math.min(Math.max(data.xOld + (x - data.xStart), width * -3), 0);
            setX(copy);
        }
    }

    return (
        <div
            className='slides-con'
            onMouseDown={(e) => setX({ ...data, grap: true, xStart: e.clientX })}
            onMouseUp={() => setX({ ...data, grap: false, xOld: data.xReal })}
            onMouseLeave={() => setX({ ...data, grap: false, xOld: data.xReal })}
            onMouseMove={(e) => scroll(e)}
        >
            <div style={{ transform: `translateX(${data.xReal}px)` }} className={`slider ${data.grap}`}>
                <div className='slide'></div>
                <div className='slide'></div>
                <div className='slide'></div>
                <div className='slide'></div>
            </div>
        </div>
    );
}



