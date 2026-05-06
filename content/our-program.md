---
# =========================
# PAGE SETTINGS
# =========================
# Required — do not change these two lines.

title: Our Program
layout: our-program.njk


# =========================
# HERO
# =========================
# The large banner image at the top of the page.

hero_title: Our Program
hero_image: /assets/images/program-hero.jpg


# =========================
# IMPORTANT UPDATE
# =========================
# Set update_enabled to true to show a blue announcement box at the top of the page.
# Set it to false to hide it when there is no active announcement.

update_enabled: true

update_title: Important Update
update_text: |
  The 2026–2027 season schedule will be released shortly. Check back here for updates!


# =========================
# UPCOMING EVENTS
# =========================
# The event cards shown below the announcement box.
# Each event needs: title, date, time, location_name, and location_url.
# Set highlight: true on a card to display it in the inverted (blue) style —
# typically used for the Ice Show.

events_title: Upcoming Events

skating_events:
  - title: Skate with the Otters
    date: TBD
    time: 6:30 p.m.
    location_name: Erie Insurance Arena
    location_url: https://erieinsurancearena.com

  - title: Annual Ice Show
    date: TBD
    time: 7:00 p.m.
    location_name: Mercyhurst Ice Center
    location_url: https://www.mercyhurst.edu
    highlight: true

  - title: Banquet
    date: TBD
    time: 5:30 p.m.
    location_name: Ambassador Conference Center
    location_url: https://ambassadorerie.com


# =========================
# FUNDRAISERS
# =========================
# Each fundraiser has three fields:
#   title   — the name of the fundraiser
#   date    — the date or date range (e.g. "October 5, 2025" or "October 13 – November 24, 2025")
#   details — location, delivery date, or any other notes (optional)

fundraisers_title: Fundraisers

fundraisers:
  - title: Bingo Fundraiser
    date: Date TBD
# Example: October 5, 2025
    details: Location TBD
# Example: Location – Brookside Fire Hall

  - title: Stanganelli’s Fundraiser
    date: Date TBD
# Example: Orders begin October 13, 2025; delivery November 24, 2025
    details: Food sale
# Example: (specific types of food being sold)

  - title: Daffin’s Candies Fundraiser
    date: Date TBD
# Example: Orders begin October 13, 2025; delivery November 24, 2025
    details: Candy bar sale
# Example (specific flavors)


# =========================
# PRACTICE SCHEDULE
# =========================
# schedule_title: The heading shown above the schedule grid.
# monday_label: The label for the recurring weekly session day.
# monday_time: The time shown next to the monday_label.
#
# year_start / year_end: Used automatically to label each date with the correct year.
#   September–December dates get year_start; January–March get year_end.
#
# schedule: A list of months with their session dates.
#   Format: MonthName: [day, day, day]
#
# extra_sessions_title: Heading for the show-prep sessions block below the grid.
# extra_sessions: Additional sessions listed below the main schedule grid.
#   Each entry has a date and a time.
#
# schedule_download: File path to the PDF download of the full schedule.

schedule_title: 2025–2026 Practice Schedule

monday_label: Regular Monday Sessions
monday_time: 6:00–7:30 p.m.

year_start: 2025
year_end: 2026

schedule:
  September: [22, 29]
  October: [6, 13, 20, 27]
  November: [3, 10, 17, 24]
  December: [1, 8, 15]
  January: [5, 12, 19, 26]
  February: [2, 9, 16, 23]
  March: [2, 9]

extra_sessions_title: Additional Sessions (Show Preparation)

extra_sessions:
  - date: Monday, March 16, 2026
    time: 5:30–8:30 p.m.
  - date: Wednesday, March 18, 2026
    time: 5:30–9:00 p.m.
  - date: Friday, March 20, 2026
    time: 5:30–9:00 p.m.
  - date: Saturday, March 21, 2026 (SHOW DAY)
    time: 5:30 p.m. Stars call time
  - date: Monday, March 23, 2026 (free skate)
    time: 6:00–7:00 p.m.

schedule_download: /assets/schedule/2025-2026-GSE-Schedule.pdf


# =========================
# PHOTO GALLERIES
# =========================
# Add as many galleries as you want. Each gallery has a title, a type, and a list of photos.
#
# type controls how photos are displayed on mobile. Choose one:
#   vertical   — mostly portrait/vertical photos
#   mixed      — a mix of portrait and landscape photos
#   horizontal — mostly landscape/horizontal photos
#
# Each photo needs three fields:
#   image    — the file path to the photo
#   credit   — who took the photo (e.g. "Photo by Linda Althof")
#   alt_text — a plain-English description of the photo for screen readers and search engines.
#              Be specific — describe who is in the photo and what they are doing.
#
# Good alt_text examples:
#   "A young girl in a blue helmet gliding on the ice, supported by a volunteer
#    on each side, smiling at the camera"
#   "Five Gliding Stars skaters and their coaches posing together in the center
#    of the ice at Mercyhurst Ice Center after the annual show"
#
# Too vague (avoid these):
#   "Skater on ice"   "Group photo"   "Event photo"

gallery_title: Photo Gallery

galleries:
  - title: Banquet 2026
    type: horizontal
    photos:
      - image: /assets/images/2026-banquet/1 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/2 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/3 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/4 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/5 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/6 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/7 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/8 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/9 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/10 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/11 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/12 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/13 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/14 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/15 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/16 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/17 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/18 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/19 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/20 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/21 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/22 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/23 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/24 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/25 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/26 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/27 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/28 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/29 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/30 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/31 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/32 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/33 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/34 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/35 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/36 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/37 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026
      - image: /assets/images/2026-banquet/38 Large.jpeg
        credit: Photo by Michael Simons
        alt_text: Banquet 2026

  - title: Halloween Party 2025
    type: mixed
    photos:
      - image: /assets/images/2025-halloween/1.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/2.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/3.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/4.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/5.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/6.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/7.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/8.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/9.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/10.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/11.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/12.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/13.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/14.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/15.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/16.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/17.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/18.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/19.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/20.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/21.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/22.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/23.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
      - image: /assets/images/2025-halloween/24.jpg
        credit: Photo by Ashlynn Allgeier
        alt_text: Halloween Party 2025
---
