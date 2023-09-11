"use server";
export async function fetchSample() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await data.json();
}


export async function SignInAction(inputs: any) {
  let user: any;
  
  if (inputs.email === 'garidipurianil1@gmail.com') {
    user = {
      name: "Anil Kumar",
      email: inputs.email,
      role: 'buyer',
      isSignedIn: true,
      isDocsUpload:true,
      isDocsVerify: true,
    };
  } else if(inputs.email === 'medikurthi.hariprasad@gmail.com') {
    user = {
      name: "Hari Prasad",
      email: inputs.email,
      role: 'seller',
      isSignedIn: true,
      isDocsUpload:true,
      isDocsVerify: false,
    };
  }else {
    user = {
      name: "Anil Kumar",
      email: inputs.email,
      role: 'buyer',
      isSignedIn: true,
      isDocsUpload:false,
      isDocsVerify: false,
    };
  }
  
  return user;
}

export async function SignUpAction(inputs:any) {
  const user = {
    name: inputs.name,
    email:inputs.email,
    role:inputs.role,
    isSignedIn: false,
    isDocsUpload:false,
    isDocsVerify:false,
  }
  return user;
}

export async function UploadDocumets(inputs:any) {
  const user = {
    name: 'Anil Kumar',
    email:'gaerfiuer',
    role:'buyer',
    isSignedIn: true,
    isDocsUpload:true,
    isDocsVerify:false,
  }
  return user;
}

export async function resendOTP(inputs:any) {
 
}

export async function verifyOTP(inputs:any) {
 
}

export async function updatePassword(inputs:any) {
  
}

