import DS from 'ember-data';
import { tracked } from '@glimmer/tracking';
import sha1 from 'js-sha1';
import Identicon from 'identicon.js';
const { Model, attr, hasMany } = DS;

export default class UserModel extends Model {
	@attr('string') name;
	@attr('string') username;
	@attr('string') bio;
	@hasMany('tweet') tweets;

	/* Depende de la llamada que yo haga, no de la base de datos, aquí se genera la imagen */
	get avatar(){
		//console.log(this.username);
		let hash = sha1(this.username);
		let data = new Identicon(hash).toString();
		return `data:image/png;base64,${data}`;
		/* console.log(hash);
		return 'hola'; */
	}
}