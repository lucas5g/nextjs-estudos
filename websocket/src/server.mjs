import { io, serverHttp } from "./http.mjs";
import './websocket.mjs'


serverHttp.listen(3000,() => console.log('Server is running on PORT 3000'))