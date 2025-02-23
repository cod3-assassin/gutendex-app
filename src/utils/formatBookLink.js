const formatOrder = ['text/html', 'application/pdf', 'text/plain'];

/**
 * Formats and returns a URL for a book's preferred format from available formats.
 * @param {Object} book - The book object containing a `formats` property.
 * @returns {string|null} - The URL of the preferred format, or null if no valid format is found.
 * @throws {Error} - Throws an error if the input is invalid.
 */
function formatBookLink(book) {
    try {
        // Check if book is an object and has formats
        if (!book || typeof book !== 'object' || !book.formats) {
            console.warn('Invalid book object or missing formats:', book);
            return null;
        }

        // Ensure formats is an object
        if (typeof book.formats !== 'object') {
            console.error('Formats property is not an object:', book.formats);
            return null;
        }

        // Get available formats, filtering out invalid URLs and ZIP files
        const availableFormats = Object.entries(book.formats)
            .filter(([mime, url]) => {
                if (!url || typeof url !== 'string') {
                    console.warn('Invalid URL in formats:', { mime, url });
                    return false;
                }
                return !url.endsWith('.zip');
            });

        // If no valid formats, return null
        if (!availableFormats.length) {
            console.warn('No valid formats available for book:', book);
            return null;
        }

        // Find the first matching format in the preferred order
        for (const format of formatOrder) {
            const found = availableFormats.find(([mime]) => mime.startsWith(format));
            if (found) {
                return found[1]; // Return the URL
            }
        }

        console.warn('No preferred format found for book:', book);
        return null;
    } catch (error) {
        console.error('Error in formatBookLink:', error);
        return null; // Fallback to null in case of any unexpected error
    }
}

export default formatBookLink;