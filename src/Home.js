
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // let name ='Janko';
    // const [name, setName]= useState('Janko');
    // const [age, setAge]= useState(25);

   

    // const [name, setName]= useState('Mario');
    const {data: blogs,isPending,error} = useFetch('http://localhost:8000/blogs')

    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs);
    //     }

   
    // const handleClick = () =>{
    //     setName('Jane');
    //     setAge('26')
        
        // console.log('Hello, Ninjas');
        // name= 'Jane';
    // }
    // const handleClickAgain = (name) =>{
    //     console.log('Hello ' + name ); 
    // }
    
    
    return (  
        <div className="home">
        {error && <div>{error}</div>}
        { isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title='All blogs !' />}
       
       {/*
        <button onClick={()=> setName('Peter')}>Change name </button>
        <p>{name}</p>
        <BlogList blogs={blogs.filter((blog)=> blog.author === 'Mario' )} title="Mario's blogs" handleDelete={handleDelete}/>
        */}
        
        {/*
            {blogs.map((blog)=> (
                <div className="blog-preview"  key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}



                        <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            
            
            
            <button onClick={()=>{
                handleClickAgain('Janko')
            }}>Click me again</button>*/}
        </div>
    );
}
 
export default Home;
