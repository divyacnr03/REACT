import React, { useEffect, useState } from 'react';
import './queen.css'

function Queen() {

    const [queenX, setQueenX] = useState(2);
    const [queenY, setQueenY] = useState(3);


    function renderQueen(id) {
        return (queenX.toString() + queenY.toString() == id) ? <div>♛</div> : <div></div>;
    }

    function renderChessEvenRows(y) {
        return (
            <div>
                <div class="black" id={"1" + y}>{renderQueen("1" + y)}</div>
                <div class="white" id={"2" + y}>{renderQueen("2" + y)}</div>
                <div class="black" id={"3" + y}>{renderQueen("3" + y)}</div>
                <div class="white" id={"4" + y}>{renderQueen("4" + y)}</div>
                <div class="black" id={"5" + y}>{renderQueen("5" + y)}</div>
                <div class="white" id={"6" + y}>{renderQueen("6" + y)}</div>
                <div class="black" id={"7" + y}>{renderQueen("7" + y)}</div>
                <div class="white" id={"8" + y}>{renderQueen("8" + y)}</div>
            </div>
        )
    }



    function renderChessOddRows(y) {
        return (
            <div>
                <div class="white" id={"1" + y}>{renderQueen("1" + y)}</div>
                <div class="black" id={"2" + y}>{renderQueen("2" + y)}</div>
                <div class="white" id={"3" + y}>{renderQueen("3" + y)}</div>
                <div class="black" id={"4" + y}>{renderQueen("4" + y)}</div>
                <div class="white" id={"5" + y}>{renderQueen("5" + y)}</div>
                <div class="black" id={"6" + y}>{renderQueen("6" + y)}</div>
                <div class="white" id={"7" + y}>{renderQueen("7" + y)}</div>
                <div class="black" id={"8" + y}>{renderQueen("8" + y)}</div>
            </div>
        )
    }

    function renderChessBoard() {
        let chessRows = [];
        for (var i = 1; i < 9; i = i + 2) {
            chessRows.push(renderChessOddRows(i))
            chessRows.push(renderChessEvenRows(i + 1))
        }
        return chessRows;
    }

    function moveUpClick() {
        if (isMoveAllowed(queenX, queenY - 1)) {
            setQueenY(queenY - 1)
        }

    }

    function moveDownClick() {
        if (isMoveAllowed(queenX, queenY + 1)) {
            setQueenY(queenY + 1)
        }

    }

    function moveRightClick() {
        if (isMoveAllowed(queenX + 1, queenY)) {
            setQueenX(queenX + 1)
        }

    }

    function moveLeftClick() {
        if (isMoveAllowed(queenX - 1, queenY)) {
            setQueenX(queenX - 1)
        }

    }

    function isMoveAllowed(x, y) {
        return (x < 1 || x > 8 || y < 1 || y > 8) ? false : true

    }

    return (
        <div>
            <div class="chessboard">
                {/* {renderChessOddRows(1)}
                {renderChessEvenRows(2)}
                {renderChessOddRows(3)}
                {renderChessEvenRows(4)}
                {renderChessOddRows(5)}
                {renderChessEvenRows(6)}
                {renderChessOddRows(7)}
                {renderChessEvenRows(8)} */}
                {renderChessBoard()}

            </div>

            <div>
                <button onClick={moveUpClick}>MoveUp</button>
                <button onClick={moveDownClick}>MoveDown</button>
                <button onClick={moveRightClick}>MoveRight</button>
                <button onClick={moveLeftClick}>MoveLeft</button>
            </div></div>
    )

}

export default Queen

