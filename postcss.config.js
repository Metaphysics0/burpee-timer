// eslint-disable-next-line @typescript-eslint/no-var-requires
import tailwindcss from 'tailwindcss';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import autoprefixer from 'autoprefixer';

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};
export default config;
