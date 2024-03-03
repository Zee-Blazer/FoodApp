
// Components
import { AllMealsContainerComponent } from "./all-meals-container.component";
import { BreakfastMealsContainerComponent } from "./breafast-meal-container.component";
import { LunchMealsContainerComponent } from "./lunch-meal-container.component";
import { DinnerMealsContainerComponent } from "./dinner-meal.container.component";

interface Props {
    screen: string
}

export const DefinePickerContainerComponent: React.FC<Props> = ({ screen }) => {

    let template;

    switch(screen) {
        case "All":
            template = <AllMealsContainerComponent />;
            break;
        case "Breakfast":
            template = <BreakfastMealsContainerComponent />;
            break;
        case "Lunch":
            template = <LunchMealsContainerComponent />;
            break;
        case "Dinner":
            template = <DinnerMealsContainerComponent />;
            break;
    }

    return (
        <>
            { template }
        </>
    )
}
