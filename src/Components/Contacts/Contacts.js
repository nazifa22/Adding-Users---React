import React, { Component } from 'react';
import './Contacts.css';

export default class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    "id": "1",
                    "name": "Karen Isgrigg",
                    "handle": "karen_isgrigg",
                    "avatarURL": "https://mcusercontent.com/2a1b147b668431e539ec91d5f/images/e9511ac2-aa41-4c3b-95a0-549218d072e6.png"
                },
                {
                    "id": "2",
                    "name": "Richard Kalehoff",
                    "handle": "richardkalehoff",
                    "avatarURL": "https://mcusercontent.com/2a1b147b668431e539ec91d5f/images/30658261-8d52-4065-80df-a78f2a39749d.png"
                },
                {
                    "id": "3",
                    "name": "Tyler McGinnis",
                    "handle": "tylermcginnis",
                    "avatarURL": "https://mcusercontent.com/2a1b147b668431e539ec91d5f/images/99a1e910-20dc-4a98-9671-e85cfb79094f.png"
                }
            ],
            userName: 'Username',
            userHandle: 'user123@',
            userAvatar: 'https://www.example.com'
        }
    }

    removeItem = (e) => {
        console.log(e.currentTarget)
        e.currentTarget.parentElement.remove();
    }

    getNewUser = (e) => {
        e.preventDefault()
     
        let newUser = {};
     
        let defaultUser = `https://img.icons8.com/ios-glyphs/60/000000/user--v1.png`
        newUser.id = Math.random();
        newUser.name = this.state.userName
        newUser.handle = this.state.userHandle
        newUser.avatarURL = this.state.userAvatar  === 'https://www.example.com' ? `${defaultUser}` : this.state.userAvatar
     
        const contacts = [...this.state.contacts];
     
        contacts.push(newUser);
     
        this.setState({
        //   ...this.state,
          contacts
        })
    }

    getInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let styles = {
            fieldset: {
                marginTop: '30px',
                maxWidth: '350px',
                textAlign: 'left',
                marginLeft: '20px',
                padding: '15px 20px'
            }
        }

        return (
            <>
                <ol className="contact-list" id="contact-list">
                    {this.state.contacts.map((contact) => (
                        <li key={contact.id} className="contact-list-item">
                            <div className="contact-avatar"
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}
                            >
                            </div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p style={{color: '#777', fontSize: '12px'}}>@{contact.handle}</p>
                            </div>
                            <button className='contact-remove' onClick={this.removeItem.bind(this)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>

                <form style={{marginTop: '40px'}} onSubmit={this.getNewUser}>
                    <fieldset style={styles.fieldset}>
                        <label>Username:</label> &nbsp;
                        <input 
                        type="text" 
                        name = "userName"
                        value = {this.state.userName}
                        style={{border: 'none', backgroundColor: 'whitesmoke', padding: '10px'}} 
                        onChange={this.getInputValue}/>

                        <br/> <br/>

                        <label>User Handle:</label> &nbsp;
                        <input type="text" 
                        value={this.state.userHandle}
                        name = "userHandle"
                        style={{border: 'none', backgroundColor: 'whitesmoke', padding: '10px'}} 
                        onChange={this.getInputValue}/>

                        <br/> <br/>

                        <label>User Avatar:</label> &nbsp;
                        <input type="url" 
                        value={this.state.userAvatar} 
                        name = "userAvatar"
                        style={{border: 'none', backgroundColor: 'whitesmoke', padding: '10px'}}
                        onChange={this.getInputValue}/>

                        <br/> <br/>

                        <input type="submit" 
                        value="Submit" 
                        style={{border: '1px solid rgb(255, 0, 0)', backgroundColor: 'transparent', padding: '10px 30px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgb(255, 0, 0)', borderRadius: '4px'}}/>
                    </fieldset>
                </form>
            </>
        )
    }
}
