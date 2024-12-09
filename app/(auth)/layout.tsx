// use bracket with (auth) to ignore the auth route and direct the request to /signup 
// This way we can save ourselves from writing the same logic of layout.tsx
 
export default function({ children }:{
    children: React.ReactNode
}) {
return <div>
<div className="border-b text-center">get 20 percent off </div>
{ children }
</div>

}