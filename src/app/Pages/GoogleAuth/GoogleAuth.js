import React ,{Component}from 'react';
class GoogleAuth extends Component{
    state = { isSignedIn: null };
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '433633574797-4niqm4g4rig0i3sg553tagtnhpase0ek.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            })
        });
    }

    renderAuthButton() {
        if(this.state.isSignedIn===null){
            return<div>not signed in</div>
        }
        else if (this.state.isSignedIn){
            return <div>i am signed in</div>
        }
        else{
            return <div>i am not sign in</div>
        }
    }
    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}
export default GoogleAuth