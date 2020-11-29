import * as moment from 'moment';
import { DateFormatPipe } from "./dateFormat.pipe"

// here we just test if dateFormat pipe work
describe('Pipe: dateFormat', () => {
    let pipe: DateFormatPipe;

    beforeEach(() => {
        pipe = new DateFormatPipe();
    });

    it('correct transform', () => {
        expect(pipe.transform(moment(364168800000))).toBe('17/07/1981');
    })
})