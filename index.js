import { IFCLoader } from "web-ifc-three/IFCLoader";

const ifcLoader = new IFCLoader();
ifcLoader.load('example.ifc', function (model) {
    console.log(model)
})