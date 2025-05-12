import MainPageAdvertDiscount from "./MainPageAdvertDiscount/MainPageAdvertDiscount"
import MainPageCategories from "./MainPageCategories/MainPageCategories"
import MainPageForm from "./MainPageForm/MainPageForm"
import dataFields from "../../shared/components/FormFields/dataFields"
import MainPageTitleLineButton from "./MainPageTitleLineButton/MainPageTitleLineButton"
import MainPageSalesItems from "./MainPageSalesItems/MainPageSalesItems"
const MainPage = () => {
    return (
        <div>
            <MainPageAdvertDiscount />
            < MainPageTitleLineButton to='/categories' title='Categories' button='All categories' />
            <MainPageCategories />
            <MainPageForm fields={dataFields} />
            < MainPageTitleLineButton to='/sales' title='Sale' button='All sales' />
            <MainPageSalesItems />
        </div>

    )
}
export default MainPage