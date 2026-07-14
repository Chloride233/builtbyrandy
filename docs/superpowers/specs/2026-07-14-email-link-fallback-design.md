# Email Link Fallback Design

## Goal

Make both public email links produce visible, useful feedback even when the visitor's browser has no default handler for `mailto:` links.

## Behavior

- Keep each link's existing `mailto:tricloride808@gmail.com` destination so configured mail clients continue to open normally.
- On click, also copy `tricloride808@gmail.com` to the clipboard.
- Show one temporary status message: `邮箱已复制` in Chinese mode or `Email copied` in English mode.
- Do not prevent the link's default action.
- Apply the behavior to the homepage `EMAIL` link and the About page contact link.

## Implementation

- Add one click listener in the existing shared `app.js`, targeting the existing `mailto:` links.
- Use the Clipboard API first. If it is unavailable or rejects, fall back to a temporary textarea and `document.execCommand('copy')`.
- Create a single reusable toast element on demand with `role="status"` and `aria-live="polite"`.
- Add a small shared toast style to `styles.css`. The toast is fixed near the bottom edge, does not alter page layout, and remains readable at desktop and mobile widths.
- Repeated clicks replace the existing timeout instead of creating multiple toast elements.

## Failure Handling

- Clipboard failure must not block or cancel the native `mailto:` action.
- If both copy methods fail, show the email address itself so the visitor can still read it.
- No error is written to the visible page or console for an unavailable mail client.

## Verification

- Desktop and 390px mobile checks on the homepage and About page.
- Confirm the toast text follows the active language.
- Confirm clipboard content matches the public Gmail address.
- Confirm the link still retains its `mailto:` destination and the click is not prevented.
- Confirm no overlap, horizontal overflow, console error, or regression in language persistence.
