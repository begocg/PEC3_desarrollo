interface Plane{
    model:string,
    npassengers:number
}

interface HangarHash {
    [key: string]: Plane;
}

let myHangar:HangarHash = {}

myHangar['123Z']={
    model:'airbus',
    npassengers:200
}
myHangar['H789']={ 
    model:'boeing',
    npassengers:151
}

for (let key in myHangar) {
        let plane = myHangar[key];
        console.log(`${key}:${plane.model}(${plane.npassengers})`)
}
