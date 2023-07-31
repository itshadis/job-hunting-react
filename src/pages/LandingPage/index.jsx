import LandingPageTemplate from "../../components/templates/LandingPageTemplate";
import Hero from "../../components/organisms/Hero";
import Testimony from "../../components/organisms/Testimony";
import Category from "../../components/organisms/Category";

export default function LandingPage() {
	
	return (
		<LandingPageTemplate>
			<Hero />
			<Testimony />
			<Category />
		</LandingPageTemplate>
	);
}
