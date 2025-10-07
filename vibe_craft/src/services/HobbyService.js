export const getHobbies = async() =>{
    const data=await fetch('http://localhost:3000/api/hobbies');
    return data.json();
};