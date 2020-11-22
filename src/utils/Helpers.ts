export class Helper {
    static number_with_commas(number: number): string {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
    }
}
