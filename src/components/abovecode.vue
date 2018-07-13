<template lang="pug">
    div.abovecode
        canvas#renderCanvas
        // canvas#renderCanvas(touch-action="none")
</template>
<script lang="ts">
import Vue from 'vue'
import * as BABYLON from 'babylonjs'
import Component from 'vue-class-component'

@Component
export default class abovecode extends Vue{
    msg: string = 'this is babylon demo'
    canvas: any
    engine: any
    scene: any
    
    abovecode (): void {
        // 根据视图区域创建 摄像头
        let camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), this.scene);
        camera.attachControl(this.canvas, true);

        // 增加视图区域的光影
         // 项目中球体上除白色光点以外的内容
        let light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 1, 0), this.scene);
         // 项目中展示的白色光点
        let light2 = new BABYLON.PointLight('light2', new BABYLON.Vector3(0, 1, -1), this.scene); 
        // 在视图区中创建一个球体
        let sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {diameter: 2}, this.scene);
    }

    // setsharp
    setsharp(): void{
        let camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this.scene);
        camera.setTarget(BABYLON.Vector3.Zero())
        camera.attachControl(this.canvas, true);
        let box = BABYLON.MeshBuilder.CreateBox('box', {depth: 0.5}, this.scene);
    }



    mounted (): void{
        // 找到canvas视图文件
        this.canvas = document.getElementById('renderCanvas');
        // 根据视图文件创建对应的引擎
        this.engine = new BABYLON.Engine(this.canvas, true);
        // 根据引擎创建对应的视图区域
        this.scene = new BABYLON.Scene(this.engine);
        // 执行对应的方法
          // 球面阴影渐变
        // this.abovecode()
        this.setsharp()
        // 渲染引擎
        this.engine.runRenderLoop(()=>{
            this.scene.render()
        })
        // 当页面变化的时候进行缩放变化
        window.addEventListener('resize',()=>{
            this.engine.resize()
        })
    }
}
</script>
<style lang="stylus" scoped>
canvas#renderCanvas
    width: 100%;
    height: 100%;
    overflow: hidden;
</style>

