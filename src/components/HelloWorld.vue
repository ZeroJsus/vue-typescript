<template lang="pug">
  div.hello
    canvas#renderCanvas
  </div>
</template>

<script lang="ts">
import * as BABYLON from 'babylonjs'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue{
  // data
  msg: string = "Welcome to Your Vue.js App";
  mounted (): void {
    //   // 原生js写法
    // var canvas: any = document.getElementById('renderCanvas')
    // var engine = new BABYLON.Engine(canvas, true)
    // var createScene = function(){
    //   // 创建一个基本的视图对象
    //   var scene = new BABYLON.Scene(engine);
    //   // 创建一个镜头
    //   var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene)
    //   // 将镜头放入视图中
    //   camera.setTarget(BABYLON.Vector3.Zero());
    //   camera.attachControl(canvas, false);
    //   // 创建一个光源
    //   var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    //   // 创建一个球体
    //   var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments: 16, diameter: 2}, scene);
    //   // 移动球体
    //   sphere.position.y = 1;
    //   var ground = BABYLON.MeshBuilder.CreateGround('ground1', {height: 6, width: 6, subdivisions: 2}, scene);
    //   // 返回创建完成的视图对象
    //   return scene;
    // }
    // // 构建图形
    // var scene = createScene();
    // // 渲染图像
    // engine.runRenderLoop(function(){
    //   scene.render()
    // })
    // // 重新渲染图形
    // window.addEventListener('resize',function(){
    //   engine.resize()
    // })
    class Game {
      private _canvas : HTMLCanvasElement;
      private _engine : BABYLON.Engine;
      private _scene : BABYLON.Scene;
      private _camera : BABYLON.FreeCamera;
      // private _light: BABYLON.Light;
      private _light2: BABYLON.Light;
      constructor(canvasElement: string){
        this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
        this._engine = new BABYLON.Engine(this._canvas, true);
        this._scene = new BABYLON.Scene(this._engine);
        this._camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this._scene);
        // this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
        this._light2 = new BABYLON.HemisphericLight('light2', new BABYLON.Vector3(1, 1, 0), this._scene);
      }
      createScene(): void{
        this._camera.setTarget(BABYLON.Vector3.Zero())
        this._camera.attachControl(this._canvas, false)
        let sphere = BABYLON.MeshBuilder.CreateSphere('sphere',{segments: 16, diameter: 2}, this._scene);
        let sphere1 = BABYLON.MeshBuilder.CreateSphere('sphere',{segments: 16, diameter: 2}, this._scene);
        sphere.position.y = 1;
        sphere1.position.y = 5;
        let ground = BABYLON.MeshBuilder.CreateGround('ground',{ height: 6,width: 6, subdivisions: 2}, this._scene);
      }
      doRender(): void{
        this._engine.runRenderLoop(()=>{
          this._scene.render();
        })

        window.addEventListener('resize',()=>{
          this._engine.resize()
        })
      }
    }
    let game = new Game('renderCanvas');
    game.createScene();
    game.doRender();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h1, h2
  font-weight: normal;
ul
  list-style-type: none;
  padding: 0;
li
  display: inline-block;
  margin: 0 10px;
a
  color: #42b983;
canvas#renderCanvas
  width: 100%;
  height: 100%;
</style>
