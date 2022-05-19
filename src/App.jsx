import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import { Button } from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import  Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useRouteMatch 
} from 'react-router-Dom';

export default function App() {
    const posts = [
        {
            id: 1 
            Title: 'My First Post',
            date: '05-17-2022',
            content: 'This is my first post ever!'
        },
        {
            id: 1 
            Title: 'Follow up',
            date: '05-24-2022',
            content: 'Yesterday was a great day, looking forward to another! '
        },
        {
            id: 1 
            Title: 'Me Time',
            date: '05-31-2022',
            content: 'Finally time to head to the Grand Canyon!'
        }
    ];

    return(
        <Container>
        <Router>
            <div>
            <ButtonGroup>
                <Button variant= "outline-secondary">
                    <Link to="./">Home</Link>
                </Button>
                <Button variant="outline-secondary">
                    <Link to="./friends">Friends</Link>
                </Button>
                <Button variant="outline-secondary">
                    <Link to="./friends">Home</Link>
                </Button>
            </ButtonGroup>
            
                <Switch>
                    <Route path="./posts">
                        <Posts posts= {posts}/>
                    </Route>
                    <Route path= "./friends">
                        <Friends names=(['Tom', 'Sally', 'Samantha']) />
                    </Route>
                    <Route path="./">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
        </Container>
    );
}

function Home(){
    return <h2>Home</h2>
}

function Friends(props) {
    const { names } = props;

    return(
        <div>
            <ul>
                {names.map((friend,index) => (
                    <li key={index}>{friend}</li>
                ))}
            </ul>
        </div>
    );

}
function Posts( { posts }){
    const match = useRouteMatch();
    const findPostsById = (id) =>
        posts.fiilter((post) => post.id == id)[0];

    return (
        <div>
            <h2>Posts</h2>
        
                {posts.map((post,index) =>{
                    return( 
                        <Alert key ={index} variant="primary"> 
                            <link to={match.url}/${posts.id}>
                                {post.title}
                            </link>
                        </Alert>
                    );  
                })}
            
            <Switch>
                <Route>
                    path= { '${match.path}/:postId'} >
                    render={}(props) =>
                    <Post
                    {...props}
                    data={findPostsById(props.match.paramas.postId)}
                        />
                    )}
                />
                <Route path={match.path}>
                    <h3>Please Select a Post.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Post(props){
    const { data } = props;
    return data == undefined ? <h1>404 Not Found</h1> : (
        <Card>
            <Card.Header>{data.title}</Card.Header>
            <Card.Body>
             <h4>{data.date}</h4>
                <p>{data.content}</p>
            </Card.Body>
        </Card>
    );
}