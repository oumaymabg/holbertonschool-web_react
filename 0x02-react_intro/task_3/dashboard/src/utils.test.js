import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Tests', () => {
    it('returns current year', () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });

    it('return Holberton School when true', () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
    });

    it('return Holberton School main dashboard when false', () => {
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });

    it('return correct', () => {
        expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
    });
});