import * as THREE from 'three';
import IFCLoader from "web-ifc-three/IFCLoader.js";

const ifcLoader = new IFCLoader();
ifcLoader.load('example.ifc', function (model) {
    console.log(model)
})