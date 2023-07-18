import React, { useState } from "react";

function Body() {

    let [item, setItem] = useState("");
    let [list, setList] = useState([]);

    const add = () => {
        document.getElementById('input').value = ''
        list.push(item)
        setList([...list])
        
    };

    const removeBtn = (index) => {
        list.splice(index,1)
        setList([...list])
    }

    const clear = ()=>{
        list.length = 0
        setList([...list])
    }
    

    return (

        <div>
            <div class="container input-group w-50 mx-auto my-5">
                <input
                    id="input"
                    onChange={(e) => setItem(e.target.value)}
                    type="text"
                    class="form-control"
                    placeholder="Item"
                    aria-label="Item"
                    aria-describedby="button-addon2"
                />
                <button
                    onClick={add}
                    class="btn btn-outline-secondary"
                    type="submit"
                    id="button-addon2"
                    
                >
                    Add Item
                </button>
            </div>

            <table className="w-50 mx-auto container table">

                {
                    list.length !== 0 ? (
                        <thead>
                            <tr>

                                <th scope="col">No</th>
                                <th scope="col">Item</th>
                                <th scope="col">Remove</th>
                                
                            </tr>
                        </thead>
                    )
                        :
                        (
                            <div className="my-2">
                                <h1>List is Empty</h1>
                            </div>
                        )
                }

                <tbody>
                    {
                    
                        list.length !== 0
                            ?
                            (
                                list.map((data, index) => {

                                    return (
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{data}</td>
                                            <td><button key={index} onClick={()=>{
                                                removeBtn(index)
                                            }}>Remove</button></td>

                                        </tr>
                                    )
                                })
                            )
                            :
                            (
                                <></>
                            )
                    }
                </tbody>
            </table>
            <div className="w-50 mx-auto">
               {

                list.length == 0
                ?
                (<></>)
                :
                (
                    <button onClick={clear}>Clear</button>
                )

               }
            </div>
        </div>
    );
}

export default Body;
