import * as THREE from 'three';
import IFCLoader from "web-ifc-three/IFCLoader.js";
import fs from 'fs'

fs.readFile('example.ifc', 'utf8', (err, data) => {
    const ifcLoader = new IFCLoader();
    ifcLoader.load(data, function (model) {
        //console.log(model.castShadow)
    })
});
console.log("hi")