import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { IoCheckmarkDoneCircle, IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const DataList = ({ table }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [data,setData] = useState([])
    const [message,setMessage] = useState('')

    console.log(data)

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/${table}`).then((res)=>{
          if(res.status === 200 && Array.isArray(res.data.data)){
            setData(res.data.data)
          }else{
            setMessage(res.data.message || 'Unexpected response from server');
          }
        }).catch((error)=>{
          setMessage(error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`);
          console.error('API Error:', error);
        })
      },[table])
  

    const toggleSelectAll = () => {
        if (selectAll) {
            setSelectedItems([]);
        } else {
            setSelectedItems(data.map(item => item._id));
        }
        setSelectAll(!selectAll);
    };

    const toggleSelectOne = (id) => {
        setSelectedItems(prevSelected =>
            prevSelected.includes(id)
                ? prevSelected.filter(item => item !== id)
                : [...prevSelected, id]
        );
    };


    return (
        <section className=' space-y-5'>
            <div className=' flex justify-between items-center'>
                <div className="flex">
                    <h1>{table}</h1> | <Link to={`${table}/add-data`}>add data</Link>
                </div>
                <button className={`${selectedItems.length>0?'bg-red-500 opacity-100':'bg-red-400 opacity-0'} duration-300 transition-all py-2 px-4 capitalize rounded-xl`}>
                    delete selected
                </button>
            </div>
            {data.length >0?(
                <table className="table w-full capitalize">
                <thead className='bg-boxground rounded-4xl'>
                    <tr>
                        <th>s.no</th>
                        <th className='w-[80%] border border-background'>title</th>
                        <th>
                            <button onClick={toggleSelectAll}>
                                {selectAll ? <IoCheckmarkDoneCircle /> : <IoCheckmarkDoneCircleOutline />}
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data&&data.map((item, index) => {
                        const title = table === 'skill'?item.name : table === 'education'?item.degree : table === 'experience'?item.role : table === 'achievement'?item.name : item.title
                        return(
                        <tr key={item._id} className={`${index % 2 === 0 ? 'bg-boxground/30' : 'bg-boxground/50'} text-center`}>
                            <td scope="row">{index+1}</td>
                            <td>
                                <Link to={`${table}/${item._id}`}>
                                {title}
                                </Link>
                            </td>
                            <td>
                                <button className='z-40' onClick={() => toggleSelectOne(item._id)}>
                                    {selectedItems.includes(item._id) ? <IoCheckmarkDoneCircle /> : <IoCheckmarkDoneCircleOutline />}
                                </button>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
            ):(
                <h1>{message}</h1>
            )}
        </section>
    );
};

DataList.propTypes = {
    table: PropTypes.any
};

export default DataList;
