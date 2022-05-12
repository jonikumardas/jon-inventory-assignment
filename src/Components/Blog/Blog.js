import React from 'react';

const Blog = () => {
    return (
        <div className='conatiner bg-black ' style={{color:'white' }}>
            <div className="row mx-auto ">
                <div className="col-md-12">
                    <div className="row">
                       <div className="col-md-5 border ms-2 m-3 shadow "style={{background:'#130f40' }}>
                         <h2>Javascript vs Node js </h2>
                          <p><span className='text-info'>Javascript </span>
                                JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act.JavaScript is an Object-oriented programming language that can be used on the client-side as well as on the server-side and developers not only use it for creating web pages
                                </p>
                                <p> <span className='text-info'>Node js </span>
                                Node.js is that it never blocks I/O, is event-driven, and can be used to create highly scalable apps. In Node.js everything is a module and using these modules developers make use of Node.js in creating web APIs, Rest API servers, command-line applications, and real-time chat applications.
                                    
                         </p>
                                        <h5>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on googles v8 engine.</h5>
                     </div>
                    
                
                <div className="col-md-5 border ms-2 m-3 shadow"style={{background:'#130f40' }}>
                    <h2> SQL vs NoSQL</h2>
                    <p><span className='text-info'>SQl</span>
                    SQL databases are relational.SQL databases use structured query language and have a predefined schema.SQL databases are vertically scalable, while SQL databases are table-based, while .SQL databases are better for multi-row transactions, while.
                    </p>
                    <p><span className='text-info'>NoSQl</span>
                        means Non-relational or distributed database system.
                        These databases are best suited for hierarchical data storage.Follows CAP such as consistency, availability, partition tolerance Horizontally scalable.NoSQL databases have dynamic schemas for unstructured data NoSQL databases are document, key-value, graph, or wide-column stores
                        </p>
                     </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-5 border ms-2 m-3 shadow"style={{background:'#130f40' }}>
                        <h2>
                            When we have to use Node js and Mongodb
                        </h2>
                        <p>
                            Node js is use to connect mongo db that means node js is use the purpas of to connect backend data .if want to connect backend data base to client site . we must have to use server site. node js is use for server site.MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js.  
                        </p>

                    </div>
                    <div className="col-md-5 border ms-2 m-3 shadow" style={{background:'#130f40' }}>
                        <h2>
                          what is JWT and what its work
                        </h2>
                        <p>
                            JWT means JSON Web Token. JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                            JWTs are mainly used for authentication. After a user signs in to an application, the application then assigns JWT to that user. Subsequent requests by the user will include the assigned JWT. This token tells the server what routes, services, and resources the user is allowed to access.
                        </p>

                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Blog;