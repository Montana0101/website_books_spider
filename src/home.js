import React,{useEffect,useState} from 'react'
import { List, Input ,Avatar} from 'antd'
import './home.less'
import axios from 'axios';

const { Search } = Input;

const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  
const Home = () => {
    const [list,getList] = useState([])
    // const [keyword,getKeyword] = useState('')

    useEffect(()=>{
    //  调用
    },[])
    
    const getBooks = async (keyword) => {
        let {data} = await axios.get(`http://127.0.0.1:7777/api/spider/books?keyword=${keyword}`)
        getList(data)
        console.log(data.splice(0,10))
      
    }
    const onSearch = value => {
        getBooks(value)
    };


    return (
        <div>
            <header>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </header>

            <main>
                <List
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={item => (
                        <a href={item.url} className="list" target="_blank">
                             <img src={item.img} style={{height:'100px',width:'100px'}}/>
                             <div className='list-item'>
                                 <div className='list-item-title'>
                                     <span>{item.title}  </span> 
                                     <span>{item.author}</span>
                                    </div>
                                 <div className='list-item-col'>
                                     <span>¥{item.price}</span>
                                     <span>{item.store}</span>
                                    <span>{item.source}</span>
                          
                                 </div>
                             </div>
                        </a>
                    )}
                />
            </main>
        </div>
    )
}

export default Home