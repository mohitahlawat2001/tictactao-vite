const History = ( {history,moveTo,currentMove}) => {
    
    return (
        <div className="history-wrapper">
            <ul className="history">
                {history.map((_, move) =>(
                    <li key={move}>
                        <button
                            type="button"
                            className={`btn-move ${currentMove === move ? 'active' : ''}` }
                            onClick={() => { moveTo(move) }}
                        >
                            {move === 0 ? 'Go to game start' : `Go to move #${move}`}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
    
    // return (
    //     <div>
    //         <ul>
    //             {
    //                 history.map((_, move) => <div>hello</div>)
    //             }
    //         </ul>  
    //     </div>
    // );

}
export default History;