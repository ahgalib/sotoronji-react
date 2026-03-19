# Project Task List

## 1. Fix Site-wide Navigation & Linking

* Audit and fix all broken links across the entire website.
* Ensure navbar links navigate correctly to their respective pages.
* Verify that every product card links properly to its single product details page.
* Ensure internal navigation behaves consistently across desktop and mobile devices.

## 2. Improve Login & Registration UI

* Redesign login and registration pages to match the existing project design system.
* Add proper spacing, alignment, and visual hierarchy.
* Improve responsiveness for mobile, tablet, and desktop.
* Add social login buttons:

  * Google login icon/button
  * Facebook login icon/button
* Keep styling consistent with current brand colors and UI components.

## 3. Implement Upsell Feature After Checkout

* Replace the default thank-you page or redirect after checkout.
* After successful checkout, show an upsell section containing:

  * Random products (temporary static/mock data)
  * Product image
  * Product title
  * Price
  * Buy button
* If user clicks "Buy":

  * Add that product to the same completed order
  * Use already provided checkout information (no extra checkout step)
* Add discount progress bar in upsell section:

  * Example:

    * Spend 4000 BDT → unlock 5% or 10% discount
* Progress bar should visually encourage additional purchase.
* Focus on smooth UX and high conversion design.

## 4. Smart Checkout Authentication Flow

* If user is NOT logged in and enters checkout:

  * Show:

    * Email field
    * Phone field
    * Password field (conditionally)
* Email behavior:

  * If entered email matches existing static/mock user:

    * Show password field
    * Show "Forgot Password?" option
  * If entered email does NOT exist:

    * Allow checkout normally
    * Simulate new account creation using static logic
    * Generate random password (temporary static value)
    * Display/send password mock message
* If user is already logged in:

  * Do not show password field
* Since backend is not ready:

  * Use static/mock authentication logic for testing

## 5. User Portal / Customer Dashboard

Create a user account portal similar to a normal ecommerce platform.

### Required Sections:

* Order history
* Order details
* Cancel order option
* Profile/account section

### Features:

* View previous purchases
* View order status
* Cancel eligible orders
* Responsive layout for mobile and desktop

## 6. Design & Code Standards

* Follow current project structure
* Follow existing design language
* Maintain consistency in reusable components
* Ensure full responsiveness
* Avoid breaking current functionality
* Keep code modular and scalable
