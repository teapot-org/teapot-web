import axios from 'axios'
import {HOST} from '../constants/app'

export const signUp = (email, name, password, firstName, lastName, description)=> async (dispatch) => {
	try{
	const signUpReq = await axios({
		method: 'POST',
		url: HOST + '/users',
		data: {
			name: name,
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
			description: description
		}
	})}
	catch(e){
		//console.Log("SignUp failed");
	}
}