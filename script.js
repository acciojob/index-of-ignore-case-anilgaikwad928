function indexOfIgnoreCase(s1, s2) {
    if(s2.length===0){
    return0;
  }
  if(s2.length>s1.length){
    return -1;
  }
  for(let i=0;i<=(s1.length-s2.length);i++){
    let found = true;
    for(let j=0;j<s2.length;j++){
        if(s1[i+j].toLowerCase()!==s2[j].toLowerCase()){
            found = false;
            break;
        }
    }
    if(found){
        return i;
    }
  }
  return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
