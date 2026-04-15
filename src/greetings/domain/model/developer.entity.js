/**
 * Represents a Developer with a first and last name.
 */
export class Developer {
    #firstName;
    #lastName;

    /**
     * Creates a new Developer instance
     * @param {string} firstName  - The developer's first name.
     * @param {string} lastName   - The developer's last name.
     */
    constructor(firstName, lastName) {
        this.#firstName = firstName?.trim() || '';
        this.#lastName = lastName?.trim() || '';
    }

    /**
     * Gets the developer's first name.
     * @returns {string} The first name of the developer.
     */
    get firstName() {
        return this.#firstName;
    }

    /**
     * Gets the developer's last name.
     * @returns {string} The last name of the developer.
     */
    get lastName() {
        return this.#lastName;
    }

    /**
     * Gets the full name of the developer. If either first or last name is missing, returns 'Unknown'.
     * @returns {string} The full name of the developer or 'Unknown' if not available.
     */
    get fullName() {
        return this.#firstName && this.#lastName
            ? `${this.#firstName} ${this.#lastName}`
            : 'Unknown';
    }
}