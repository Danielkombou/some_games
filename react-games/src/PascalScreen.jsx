import { useState } from "react";


function PasTriangle () {
const [numRows, setNumRows] = useState()
const [triangle, setTriangle] = useState([])

const GenTriangle = ()=>{
    if(numRows <= 0 || isNaN(numRows)){
        alert("Enter a valid number of rows.");
        return;
    }

    let NewTringle = []
    for (let i = 0; i < numRows; i++) {
        let row = []
        // Add space to the left
        // row.push(" ".repeat(numRows - i -1));
        // Generate Pascal triangle
        for (let j = 0; j <= i; j++) {
            if(j === 0 || j === i){
                row.push(1);
            } else {
                row.push(NewTringle[i-1][j-1] + NewTringle[i-1][j]);
            }
        }
        NewTringle.push(row);
    }
    setTriangle(NewTringle);
};

const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
        GenTriangle()
    }
};

return(
    <div>
        <h1>Pascal's Triangle</h1>
        <p>Enter the number of rows.</p>
        <input 
        type="number"
        value={numRows}
        onKeyPress={handleKeyPress}
        onChange={(e)=> setNumRows(parseInt(e.target.value))} />
        <button onClick={GenTriangle}>Generate Triangle</button>
        <div>
            {triangle.map((row, index) =>(
                <div key={index}
                style={{textAlign: 'center'}}
                >{row.join(' ')}</div>
            ))}
        </div>
    </div>
)
}

export default PasTriangle;