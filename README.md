# newer acm website

## Deployment Instructions

To deploy your application, write the following in bash:

```bash
chmod +x deploy.sh
./deploy.sh
```

## Local Development Setup

To get your development environment running locally:

```bash
cd client
npm i
npm start
```

---

## Managing Events

### Adding New Events

**Step 1:** Upload Event Image
- Place your event image in: `client/src/assets/events/(current academic year)/`

**Step 2:** Import the Image
- Add the import statement to: `client/src/constants/eventData.js`

**Step 3:** Add Event Object
Add a new event object to the corresponding year in the `eventsData` const:

```javascript
{
  id: 1,
  name: "Event Name goes here",
  time: "August 16, 2025 - 6:00 PM",
  location: "Davis 101",
  description: "Description goes here",
  poster: event_image_that_you_imported,
}
```

### Updating Default Year View

To change which academic year displays first on the events page:
- Update the initial state of `selectedCategory` in: `client/src/components/events/Events.js`

---

## Managing E-Board Members

### Adding New E-Board Members

**Step 1:** Upload E-Board Image
- Place member image in: `client/src/assets/eboard/(current academic year)/`

**Step 2:** Import the Image
- Add the import statement to: `client/src/constants/eboardData.js`

**Step 3:** Add Member Object
Add a new member object to the corresponding year in the `eBoardData` const:

```javascript
{
  id: 10,
  name: "Name goes here",
  role: "Title of role goes here",
  linkedin: "Link to linkedin goes here",
  image: member_image_that_you_imported,
}
```

### Updating Default Year View

To change which academic year displays first on the e-board page:
- Update the initial state of `selectedYear` in: `client/src/components/eboard/EBoardComponent.js`

---

## Updating Hero Section Images

To update the main landing page carousel images:

**Step 1:** Upload Image
- Place your image in: `client/src/assets/hero/`

**Step 2:** Import and Add
- Import the image in: `client/src/components/hero_/HeroComponent.js`
- Add the imported image to the `images` const array

---

## Quick Tips

- Compress images before uploading to improve load times
- Ensure unique IDs when adding new events or e-board members

## Potential Future To-Dos

- Rn the website is purely static, might be good to add a database or CMS integration
- Working on a potential "About" page for more details of what ACM does
