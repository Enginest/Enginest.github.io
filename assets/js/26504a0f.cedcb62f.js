"use strict";(self.webpackChunkmobile_docs=self.webpackChunkmobile_docs||[]).push([[4195],{2395:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=r(5893),t=r(1151);const a={toc_max_heading_level:3,pagination_prev:null,sidebar_position:6},i="Screens",o={id:"screens/index",title:"Screens",description:"Cette page explique ou trouver chaque rendu de chaque page de l'application.",source:"@site/docs/screens/index.md",sourceDirName:"screens",slug:"/screens/",permalink:"/docs/screens/",draft:!1,unlisted:!1,editUrl:"https://github.com/docs/screens/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{toc_max_heading_level:3,pagination_prev:null,sidebar_position:6},sidebar:"tutorialSidebar",next:{title:"Emulator",permalink:"/docs/emulator"}},l={},d=[{value:"BottomBar",id:"bottombar",level:2},{value:"Profile",id:"profile",level:3},{value:"Modify Password",id:"modify-password",level:4},{value:"Settings",id:"settings-1",level:4},{value:"Logout",id:"logout",level:4},{value:"Home",id:"home",level:3},{value:"Textfield",id:"textfield",level:4},{value:"Programs",id:"programs",level:4},{value:"Database",id:"database",level:3},{value:"Data",id:"data",level:2},{value:"Login",id:"login",level:2},{value:"TableField",id:"tablefield",level:2},{value:"Edit",id:"edit",level:2},{value:"Maps",id:"maps",level:2},{value:"Settings",id:"settings",level:2},{value:"Programs",id:"programs-1",level:2},{value:"Upload",id:"upload",level:3},{value:"Download",id:"download",level:3},{value:"Maps",id:"maps-1",level:3},{value:"Abstraction",id:"abstraction-1",level:3},{value:"Abstraction",id:"abstraction",level:2},{value:"EditOrder",id:"editorder",level:2},{value:"EditOrderData",id:"editorderdata",level:2},{value:"Insert",id:"insert",level:3},{value:"Edit",id:"edit-1",level:3}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"screens",children:"Screens"}),"\n",(0,s.jsx)(n.p,{children:"Cette page explique ou trouver chaque rendu de chaque page de l'application."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Alt text",src:r(915).Z+"",width:"1037",height:"267"})}),"\n",(0,s.jsx)(n.h2,{id:"bottombar",children:"BottomBar"}),"\n",(0,s.jsx)(n.p,{children:"C'est la navbar."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="POEM_Mobile/screen/App.js"',children:"function BottomBar(navigation) {\r\n  return (\r\n    <Tab.Navigator initialRouteName=\"Home\" options={{ labeled: false, }} screenOptions={{ tabBarHideOnKeyboard: true, tabBarShowLabel: false, backgroundColor: global.params[0], tabBarActiveTintColor: 'white', tabBarInactiveTintColor: '#778899', tabBarStyle: { backgroundColor: '#000', height: 70 }, headerShown: false }} >\r\n      <Tab.Screen\r\n        name=\"Profile\"\r\n        component={Profile}\r\n        options={{\r\n          tabBarLabel: 'Profile',\r\n          tabBarIcon: ({ color, size }) => (\r\n            <MaterialCommunityIcons name=\"account\" color={color} size={size} />\r\n          ),\r\n        }}\r\n      />\r\n\r\n      <Tab.Screen\r\n        name=\"Home\"\r\n        component={Home}\r\n        options={{\r\n          tabBarLabel: 'Home',\r\n          tabBarIcon: ({ color, size }) => (\r\n            <MaterialCommunityIcons name=\"home\" color={color} size={size} />\r\n          ),\r\n        }}\r\n      />\r\n\r\n      <Tab.Screen\r\n        name=\"Database\"\r\n        component={Database}\r\n        options={{\r\n          headerTintColor: '#',\r\n          tabBarLabel: 'Database',\r\n          tabBarIcon: ({ color, size, focused }) => {\r\n            return (\r\n              <MaterialCommunityIcons name=\"database\" color={color} size={size} />\r\n            )\r\n          },\r\n\r\n        }}\r\n\r\n      />\r\n\r\n    </Tab.Navigator>\r\n  );\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"profile",children:"Profile"}),"\n",(0,s.jsxs)(n.p,{children:["POEM_Mobile/screen/Profile.js ",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"Alt text",src:r(8750).Z+"",width:"438",height:"957"})]}),"\n",(0,s.jsx)(n.h4,{id:"modify-password",children:"Modify Password"}),"\n",(0,s.jsx)(n.p,{children:"Ca modifie le mot de passe."}),"\n",(0,s.jsx)(n.h4,{id:"settings-1",children:"Settings"}),"\n",(0,s.jsxs)(n.p,{children:["Ca permet d'acc\xe9der au param\xe8tre. ",(0,s.jsx)(n.a,{href:"#settings",children:"ici"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"logout",children:"Logout"}),"\n",(0,s.jsx)(n.p,{children:"Ca d\xe9connecte de la session."}),"\n",(0,s.jsx)(n.h3,{id:"home",children:"Home"}),"\n",(0,s.jsxs)(n.p,{children:["POEM_Mobile/screen/Home.js ",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"Alt text",src:r(2907).Z+"",width:"438",height:"951"})]}),"\n",(0,s.jsx)(n.h4,{id:"textfield",children:"Textfield"}),"\n",(0,s.jsx)(n.p,{children:"Ca permet de choisir la table qu'on veut modifier."}),"\n",(0,s.jsx)(n.h4,{id:"programs",children:"Programs"}),"\n",(0,s.jsxs)(n.p,{children:["Ca permet d'acc\xe9der au programs. ",(0,s.jsx)(n.a,{href:"#programs",children:"ici"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"database",children:"Database"}),"\n",(0,s.jsxs)(n.p,{children:["POEM_Mobile/screen/Database.js ",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"Alt text",src:r(808).Z+"",width:"439",height:"956"})]}),"\n",(0,s.jsxs)(n.p,{children:["On peux activer ou desactiver l'affichage d'une table sp\xe9cifique. ",(0,s.jsx)(n.br,{}),"\n","On peux cliquer sur chaque tables pour activer ou desactiver l'affichage de champs sp\xe9cifique."]}),"\n",(0,s.jsx)(n.h2,{id:"data",children:"Data"}),"\n",(0,s.jsx)(n.h2,{id:"login",children:"Login"}),"\n",(0,s.jsxs)(n.p,{children:["POEM_Mobile/screen/Login.js ",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"Alt text",src:r(9631).Z+"",width:"437",height:"949"})]}),"\n",(0,s.jsx)(n.p,{children:"Permet de se connecter et possibilit\xe9 d'acc\xe9der aux param\xe8tres."}),"\n",(0,s.jsx)(n.h2,{id:"tablefield",children:"TableField"}),"\n",(0,s.jsx)(n.h2,{id:"edit",children:"Edit"}),"\n",(0,s.jsxs)(n.p,{children:["C'est l'ancien \"EditOrderData\" ",(0,s.jsx)(n.a,{href:"#editorderdata",children:"ici"}),". ",(0,s.jsx)(n.br,{}),"\n","Je ne sais pas pourquoi il est toujours la."]}),"\n",(0,s.jsx)(n.h2,{id:"maps",children:"Maps"}),"\n",(0,s.jsxs)(n.p,{children:["POEM_Mobile/screen/Maps.js ",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"Alt text",src:r(4941).Z+"",width:"439",height:"953"})]}),"\n",(0,s.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,s.jsxs)(n.p,{children:["POEM_Mobile/screen/Settings.js ",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"Alt text",src:r(2948).Z+"",width:"437",height:"952"})]}),"\n",(0,s.jsxs)(n.p,{children:["Possibilit\xe9 de changer les couleurs.",(0,s.jsx)(n.br,{}),"\n","Ip et port du serveur."]}),"\n",(0,s.jsx)(n.h2,{id:"programs-1",children:"Programs"}),"\n",(0,s.jsxs)(n.p,{children:["POEM_Mobile/screen/Programs.js ",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"Alt text",src:r(9548).Z+"",width:"438",height:"950"})]}),"\n",(0,s.jsx)(n.h3,{id:"upload",children:"Upload"}),"\n",(0,s.jsxs)(n.p,{children:["Fonctionne pas. C'est la fonction de test. ",(0,s.jsx)(n.br,{}),"\n","Le serveur n'autorise pas la methode POST. A voir."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="POEM_Mobile/screen/Programs.js"',children:"const uploadFile = async () => {\r\n      try {\r\n        const document = await DocumentPicker.getDocumentAsync({\r\n          type: '*/*',\r\n        });\r\n    \r\n        if (document.type === 'success') {\r\n          const file = document.uri;\r\n          const fileName = document.name;\r\n    \r\n          const formData = new FormData();\r\n          formData.append('file', { uri: file, name: fileName, type: 'application/octet-stream' });\r\n    \r\n          const response = await axios.post('http://10.0.2.2:80/upload', formData, {\r\n            headers: {\r\n              'Content-Type': 'multipart/form-data',\r\n            },\r\n            onUploadProgress: (progressEvent) => {\r\n              const progress = (progressEvent.loaded / progressEvent.total) * 100;\r\n              console.log(`Taux de progression : ${Math.round(progress)}%`);\r\n            },\r\n          });\r\n    \r\n          console.log('R\xe9ponse du serveur:', response.data);\r\n        }\r\n      } catch (error) {\r\n        console.error('Erreur lors de l\\'upload du fichier:', error);\r\n      }\r\n    };\n"})}),"\n",(0,s.jsx)(n.h3,{id:"download",children:"Download"}),"\n",(0,s.jsxs)(n.p,{children:["Fonctionne bien mais reste quelques ajustement a faire. ",(0,s.jsx)(n.br,{}),"\n","C'est actuellement juste la fonction de test."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="POEM_Mobile/screen/Programs.js"',children:"const downloadFile = async () => {\r\n        try {\r\n            const fileUrl = 'http://10.0.2.2:80/download/Test.zip';\r\n            const fileUri = FileSystem.documentDirectory + 'Test.zip';\r\n      \r\n            const downloadObject = FileSystem.createDownloadResumable(\r\n              fileUrl,\r\n              fileUri,\r\n              {},\r\n              (downloadProgress) => {\r\n                const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;\r\n                console.log(`Progression du t\xe9l\xe9chargement : ${progress * 100}%`);\r\n              }\r\n            );\r\n      \r\n            const response = await downloadObject.downloadAsync();\r\n      \r\n            if (response.status === 200) {\r\n              console.log('Fichier t\xe9l\xe9charg\xe9 avec succ\xe8s !');\r\n              console.log(`Chemin du fichier local : ${fileUri}`);\r\n            } else {\r\n              console.log('Erreur lors du t\xe9l\xe9chargement du fichier.');\r\n            }\r\n          } catch (error) {\r\n            console.error('Une erreur s\\'est produite :', error);\r\n          }\r\n        };\n"})}),"\n",(0,s.jsx)(n.h3,{id:"maps-1",children:"Maps"}),"\n",(0,s.jsxs)(n.p,{children:["Ca permet d'acc\xe9der au maps. ",(0,s.jsx)(n.a,{href:"#maps",children:"ici"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"abstraction-1",children:"Abstraction"}),"\n",(0,s.jsxs)(n.p,{children:["Ca permet d'acc\xe9der a l'abstraction de donn\xe9e. ",(0,s.jsx)(n.a,{href:"#abstraction",children:"ici"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"abstraction",children:"Abstraction"}),"\n",(0,s.jsxs)(n.p,{children:["POEM_Mobile/screen/Abstraction.js ",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"Alt text",src:r(1089).Z+"",width:"438",height:"952"})]}),"\n",(0,s.jsxs)(n.p,{children:["Ca fonctionne avec les programmes ncl. D\xe9tails ",(0,s.jsx)(n.a,{href:"../config/mobile/parsing/ncl_programs.md",children:"ici"}),". ",(0,s.jsx)(n.br,{}),"\n","C'est globalement un syst\xe8me qui permet d'ex\xe9cuter les programmes ncl avec des arguments."]}),"\n",(0,s.jsx)(n.h2,{id:"editorder",children:"EditOrder"}),"\n",(0,s.jsxs)(n.p,{children:["POEM_Mobile/screen/EditOrder.js ",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"Alt text",src:r(5603).Z+"",width:"438",height:"954"})]}),"\n",(0,s.jsx)(n.h2,{id:"editorderdata",children:"EditOrderData"}),"\n",(0,s.jsxs)(n.p,{children:["POEM_Mobile/screen/EditOrderData.js ",(0,s.jsx)(n.br,{}),"\n","La fonction EditOrderData s'active quand on clique sur un des deux bouton entour\xe9 en rouge de l'image ci-dessous. ",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"Alt text",src:r(6794).Z+"",width:"438",height:"954"})]}),"\n",(0,s.jsx)(n.h3,{id:"insert",children:"Insert"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Alt text",src:r(2229).Z+"",width:"436",height:"953"})}),"\n",(0,s.jsx)(n.h3,{id:"edit-1",children:"Edit"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Alt text",src:r(8065).Z+"",width:"434",height:"950"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8750:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-1-cae7d688a2e91a4fe90f66cda76afd26.png"},6794:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-10-659383415f653790963de3f8dda6ae50.png"},2229:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-11-2f76367ce2179ba11d676c03631fdf7e.png"},8065:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-12-627f851b414eacbecf260b710f59f2b8.png"},2907:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-2-d3b79b46f4477421d26ffae6046c7c77.png"},808:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-3-9c2f671dc83f51eca7deac3813bc3137.png"},9631:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-4-ac314d38576c8ffc631816392fba0707.png"},4941:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-5-d7eccf0cc87b4014137451af2aac2212.png"},2948:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-6-a4423b33294891351d40cf8ce1a2cee9.png"},9548:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-7-fb27e0413f54606cca3268e9796123b4.png"},1089:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-8-21c04ce37745d629a45e329e0589a459.png"},5603:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-9-2cb32fa9509be47483610537d48f5bb7.png"},915:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-f649bff12d9d1d3ebaffdb5c575b58b0.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var s=r(7294);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);