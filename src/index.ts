import startApplication from "./app";
import envChecker from "./utils/checkers/envchecker";

(async () => {
    try {
        startApplication;
        await envChecker();
    } catch (error) {
        console.log('Oops!', error);
    }
})();