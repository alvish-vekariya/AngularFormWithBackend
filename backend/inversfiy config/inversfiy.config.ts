import { Container } from "inversify";
import { userService } from "../services";

const container = new Container();

container.bind<userService>(userService).toSelf();

export default container;