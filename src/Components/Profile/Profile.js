import Axios from "axios";
import React, { useEffect, useState ,useCallback} from 'react';
import './Profile.css';
import { useSelector, useDispatch } from 'react-redux';
import cookie from 'js-cookie';
import {useDropzone} from 'react-dropzone';
import { getAvatar, uploadAvatar } from '../../Actions/authActions';
import { Base64 } from 'js-base64';
import { history } from '../../history';

async function exists(url) { 
    let prom = await fetch(url)
    return prom;
}

function Profile(props) {
    const userInstance = cookie.get('userInstance');
    const dispatch = useDispatch();
    const data = (JSON.parse(userInstance)).data;
    const [newfile, setFile] = useState([]);
    const [strTXT, setText] = useState([]);
    const [imgString, setImage] = useState([]);
    const fetchAndSetPNG = async () => {
        exists("https://cloud-cube-us2.s3.amazonaws.com/t09vuh9fptce/public/1/"+data.user.id+".png").then(res =>{
            if(res.status === 200){
                setImage("https://cloud-cube-us2.s3.amazonaws.com/t09vuh9fptce/public/1/"+data.user.id+".png");
                return;
            }
            fetchAndSetJPG(".jpg");
            console.log('~~~~~~~PNG')
            console.log(res)
        }).catch(err =>{
            console.log('~~~~~~~PNG-ERROR')
            console.log(err)
            fetchAndSetJPG(".jpg");
        })
    }
    const fetchAndSetJPG = async () => {
        exists("https://cloud-cube-us2.s3.amazonaws.com/t09vuh9fptce/public/1/"+data.user.id+".jpg").then(res =>{
            if(res.status === 200){
                setImage("https://cloud-cube-us2.s3.amazonaws.com/t09vuh9fptce/public/1/"+data.user.id+".jpg");
            }
            console.log('~~~~~~~JPG')
            console.log(res)
        }).catch(err =>{
            console.log('~~~~~~~JPG-ERROR')
            console.log(err)
        })
    }
    useEffect(() => {
        if(data)
            fetchAndSetPNG();
    }, [])
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const files = acceptedFiles.map(file => (
        <li key={file.name}>
        {file.name} - {file.size} bytes
        </li>
    ));
    const handleUpload = (e) => {
        e.preventDefault();
        const fdata = new FormData();
        fdata.append('email', data.user.email);
        fdata.append('avatar', acceptedFiles[0]);
        let res = dispatch(uploadAvatar(fdata))
        res.then(result => {
            if(result){
                if(result.data.success) {
                    fetchAndSetPNG();
                    history.go(0);
                }
            }
        })
    }
    return (   
        <div>
            <div className="container">
                <div className="row">
                    <div className="col avatarcontainer">
                        <img className="avatarimg" src={imgString} alt="profile img"></img>
                    </div>
                </div>
                <div className="row">
                    <h1 className="profile-title">{data.user.firstname} {data.user.lastname}</h1>
                </div>
                <div class="accordion" id="accordionProfile">
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Edit Profile Picture
                            </button>
                        </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionProfile">
                        <div class="card-body">
                            <div className="upcontainer">
                                <div {...getRootProps({className: 'dropzone'})}>
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop JPG\PNG images only</p>
                                </div>
                                <aside>
                                    <h4>Files</h4>
                                    <ul>{files}</ul>
                                </aside>
                                <div className="row">
                                    <div className="col-4 rightcol">
                                        <button type="button" class="upbtn" onClick={handleUpload}>Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    </div>
            </div>
        </div>
    );
}
export default Profile;
