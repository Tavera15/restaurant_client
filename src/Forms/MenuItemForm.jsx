import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

function MenuItemForm({item, btnText, num, btnAction})
{
    const token = useSelector(state => state.token.value);

    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(1.00);
    const [itemDesc, setItemDesc] = useState("");
    const [currentListOptions, setCurrentListOptions] = useState([]);
    const [listName, setListName] = useState("");
    const [listOpt, setListOpt] = useState("");
    const [img, setImg] = useState("");
    const [customs, setCustoms] = useState({});
    const [displayCustoms, setDisplayCustoms] = useState(false);
    const [displayEditList, setDisplayEditList] = useState(false);

    const [updateListKey, setUpdateListKey] = useState("");
    const [categories, setCategories] = useState([]);
    const [isCategoriesUpdated, updateCategories] = useState(false);
    const [displayCategory, setDisplayCategory] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");

    useEffect(() => {
        if(!isCategoriesUpdated)
        {
            axios.get(import.meta.env.VITE_SERVER_API + "/Category/")
            .then((res) => setCategories(res.data))
            .finally(() => updateCategories(true))
        }
    }, [isCategoriesUpdated])

    useEffect(() => {
        if(!item) {return;}

        setItemName(item.name);
        setItemDesc(item.description);
        setItemPrice(item.price);
        setImg(item.image);
        setCustoms(JSON.parse(item.customs));
    },[item])

    function createNewCategory()
    {
        const data = {
            name: newCategoryName
        }

        axios.post(import.meta.env.VITE_SERVER_API + "/Category/CreateCategory", data, {headers: {Authorization: token}})
        .then(() => setDisplayCategory(false))
        .finally(() => updateCategories(false));
    }

    function addOptToList(e)
    {
        e.preventDefault();

        if(listOpt.trim() === "")
        {
            alert("List option cannot be blank");
            return;
        }

        setCurrentListOptions(prev => [...prev, listOpt.trim()]);
        setListOpt("");
    }

    function saveList()
    {
        if(listName.trim() === "" || currentListOptions.length === 0)
        {
            alert("List name cannot be blank, or need to have at least one custom option");
            return;
        }

        setCustoms(prev => ({...prev, [listName.trim()]: currentListOptions.toString()}));
        setListName("");
        setListOpt("");
        setCurrentListOptions([]);
        setDisplayCustoms(false);
    }

    function editCustomList(key)
    {
        setDisplayEditList(true);
        setDisplayCustoms(true);
        setUpdateListKey(key);
        setListName(key)
        setCurrentListOptions(customs[key].split(','));
    }

    function commitListChanges()
    {
        if(listName.trim() === "" || currentListOptions.length === 0)
        {
            alert("List name cannot be blank, or need to have at least one custom option");
            return;
        }

        const res = {};

        for(const [k, v] of Object.entries(customs))
        {
            if(k === updateListKey)
            {
                res[listName] = currentListOptions;
            }
            else
            {
                res[k] = v;
            }
        }

        setCustoms(res);
        setListName("");
        setListOpt("");
        setDisplayEditList(false);
        setDisplayCustoms(false);
    }

    function removeCustomList(key)
    {
        const res = {};

        for(const [k, v] of Object.entries(customs))
        {
            if(k !== key)
            {
                res[k] = v;
            }
        }

        setCustoms(res);
    }

    function removeListOption(opt)
    {
        const res = [];

        for(let o in currentListOptions)
        {
            if(currentListOptions[o] !== opt)
            {
                res.push(currentListOptions[o]);
            }
        }

        setCurrentListOptions(res);
    }

    /*
    function handleImgUpload(e)
    {
        const newImg = e.target.files[0];

        if(newImg !== undefined)
        {
            const reader = new FileReader();
            reader.readAsDataURL(newImg);
            
            reader.onload = function () {
                // Convert img to bytes
                const imgBytesRaw = JSON.stringify(reader.result)
                const imgBytes = imgBytesRaw.substring(1, imgBytesRaw.length-1)
                setImg(imgBytes);
            }
        }
    }
    */

    function handleSubmit(e)
    {
        e.preventDefault();

        const data = {
            "name": itemName,
            "description": itemDesc, 
            "price": itemPrice, 
            "categoryId": "66300cc024d6df44c8c0e697", 
            "image": img,
            "customs": customs
        }

        btnAction(e, data);
    }

    return(
        <div className="modal fade" id={`menuItemFormModal${num}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <input placeholder="Menu Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Card.Img variant="top" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} src={img} alt={itemName} />

                        <div className="mt-4">
                            <label htmlFor={"form-price" + num} className="form-label">Price</label>
                            <input id={"form-price" + num} type="number" min="1" className="form-control" placeholder="Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
                        </div>

                        <div className="mt-4">
                            <label htmlFor={"form-category" + num} className="form-label">Category</label>
                            <select defaultValue={categories && categories[0] ? categories[0]._id : "0"} id={"form-category" + num} className="form-select" aria-label="Default select example">
                                {
                                    categories.map((c, i) => {
                                        return <option value={c._id} key={i}>{c.name}</option>
                                    })
                                }
                            </select>

                            <Button className={"mt-2 col-12 " + (displayCategory ? "btn-danger" : "btn-dark")} onClick={() => setDisplayCategory(!displayCategory)}>
                                {displayCategory ? "Close" : "Create Category"}
                            </Button>

                            {
                                (displayCategory)
                                    ?   <div className="mt-4 border p-4">
                                            <label htmlFor={"form-category" + num} className="form-label">New Category Name</label>
                                            <input id={"form-category" + num} className="form-control" placeholder="Category Name" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)}/>
                                            <Button onClick={() => createNewCategory()} className="btn-success mt-2">Create</Button>
                                        </div>
                                    : ""
                            }
                            

                        </div>
                        
                        <div className="mt-4">
                            <label htmlFor={"form-desc" + num} className="form-label">Description</label>
                            <input id={"form-desc" + num} className="form-control" placeholder="Details" value={itemDesc} onChange={(e) => setItemDesc(e.target.value)}/>
                        </div>

                        <div className="mt-4">
                            <label htmlFor={"form-image" + num} className="form-label">Image URL</label>
                            <input id={"form-image" + num} value={img} onChange={(e) => setImg(e.target.value)} className="form-control" placeholder="Image" />
                        </div>

                        {
                            Object.keys(customs).length > 0
                            ? <h2 className="mt-4">Customizations</h2>
                            : ""
                        }

                        <div className="mt-4">
                            {
                                Object.keys(customs).map((k, i) => {
                                    return (
                                        <div key={k} className="d-flex col align-items-center justify-content-between">
                                            <h4 className="me-3">{k}</h4>

                                            <div>
                                                <Button onClick={() => editCustomList(k)} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-sm me-1 mb-2" data-mdb-tooltip-init
                                                title="Edit item">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                                </svg>
                                                </Button>

                                                <Button onClick={() => removeCustomList(k)} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init
                                                title="Remove item">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                                </svg>
                                                </Button>
                                            </div>
                                        </div>
                                    ) 
                                })
                            }
                            
                            {
                                (!displayCustoms)
                                ?   <Button onClick={(e) => setDisplayCustoms(true)} className="mt-2 mb-2">Customize</Button>
                                :   <div id="custom-form">
                                        {
                                            (!displayEditList)
                                            ? <Button onClick={(e) => setDisplayCustoms(false)} className="mt-2 mb-2">Close</Button>
                                            : ""
                                        }

                                        <input className="form-control mt-2" placeholder="Name: (ex. Size)" value={listName} onChange={(e) => setListName(e.target.value)}/>
                                        <input className="form-control mt-2" onChange={(e) => setListOpt(e.target.value)} value={listOpt} placeholder="Option: (ex. Small)"/>

                                        {

                                            (!displayEditList)
                                                ?   <div className="mt-4 d-flex justify-content-evenly">
                                                        <Button className="mt-2" onClick={(e) => addOptToList(e)}>Add</Button>
                                                        <Button className="mt-2 btn-success" onClick={() => saveList()}>Save List</Button>
                                                    </div>
                                                :   <div className="mt-4 d-flex justify-content-evenly">
                                                        <Button className="mt-2" onClick={(e) => addOptToList(e)}>Add</Button>
                                                        <Button onClick={() => commitListChanges()} className="mt-2 btn-success">Update</Button>
                                                    </div>
                                        }

                                        <div className="mt-4">
                                            {
                                                currentListOptions.map((opt, i) => {
                                                    return(
                                                        <div key={opt} className="d-flex col align-items-center justify-content-between">
                                                            <h4 className="me-3">{opt}</h4>

                                                            <div>
                                                                <Button onClick={() => removeListOption(opt)} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init
                                                                title="Remove item">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                                                </svg>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>

                    {
                        (!displayEditList && !displayCustoms)
                        ?   <div className="modal-footer d-flex justify-content-evenly">
                                <Button variant="secondary" data-bs-dismiss="modal">Close</Button>
                                <Button onClick={(e) => handleSubmit(e)} variant="primary" data-bs-dismiss="modal">{btnText}</Button>
                            </div>
                        : ""
                    }
                </div>
            </div>
        </div>
    );
}

export default MenuItemForm;