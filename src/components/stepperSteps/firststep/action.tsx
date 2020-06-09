import {firstDoc,secondDoc,thirdDoc} from '../../../utils/constant'
export const handleUploadFile = (e:any, id:string) =>{
    const fileUploaded = e.target.files[0];
    // debugger
    // var reader = new FileReader();
    // debugger
    // var url = reader.readAsDataURL(fileUploaded);
    // debugger
    var url = URL.createObjectURL(fileUploaded)
      if(id === 'firstDoc'){
      return{
          type: firstDoc,
          payload: {'firstDoc': fileUploaded, furl: url}, 
      }
      } else if(id === 'secondDoc'){
        return{
            type: secondDoc,
            payload: {'secondDoc': fileUploaded,surl: url},
        }      
    } else 
     return {
        type: thirdDoc,
        payload: {'thirdDoc': fileUploaded,turl: url},
      }    
}
