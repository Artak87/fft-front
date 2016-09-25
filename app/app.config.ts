interface Configuration {
	auth:AuthConfiguration;
}

interface AuthConfiguration {
    clientID: string,
    domain: string
}

export const config:Configuration = {
	auth: {
		clientID: 'EmTOlyxzEvioeY1LWUV95TnNMmmgKQX6',
    	domain: 'ashot.auth0.com'
	}
};
