1. **Mandatory Updates:** Any and all modifications to the project must be reflected in `TechnicalDocument.md`. This includes, but is not limited to:
    - **Project Structure:** Changes to the directory and file organization.
    - **File Details:** Creation of new files, deletion of existing files, or significant changes to the purpose or functionality of a file.
    - **Database Schema:** Modifications to database tables, columns, relationships, or data models.
    - **API Endpoints:** Additions, deletions, or changes to API routes, request/response formats, and authentication requirements.
    - **Environment Variables:** Any new, removed, or modified environment variables.
    - **Dependencies:** Addition or removal of any libraries, frameworks, or other external dependencies.
    - **Core Logic:** Significant changes to key algorithms or business logic.
2. **Timing of Updates:** The `TechnicalDocument.md` file must be updated as part of the same commit or set of changes that introduces the modification to the codebase. Documentation updates should not be deferred.
3. **Context Reference:** When context about the project is required, `TechnicalDocument.md` should be consulted as the primary source of information before scanning the entire codebase.

**Example Workflow:**

1. **Developer Task:** Add a new API endpoint for user authentication.
2. **Code Changes:**
    - Create a new file `auth.js` with the authentication logic.
    - Add a new route in the main server file.
    - Update the database schema to include a `users` table.
3. **Documentation Change (in the same commit):**
    - Open `TechnicalDocument.md`.
    - Add an entry under "Project Structure" for `auth.js`.
    - Add a section for "API Endpoints" detailing the new authentication endpoint.
    - Update the "Database Schema" section with the new `users` table description.

**Enforcement:**

Before committing any changes, ask yourself: "Have I updated `TechnicalDocument.md` to reflect these changes?" If the answer is no, the commit should be amended to include the necessary documentation updates.
