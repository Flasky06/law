<template>
  <div class="">
    <!-- <div class="lg:max-w-7xl mx-auto"> -->
    <div class="bg-slate-950 w-full h-32 flex justify-between py-6">
      <div class="px-80">
        <h1 class="text-white">Contact</h1>
      </div>
      <div class="flex px-40">
        <a href="your_link_here" class="text-white">
          <span class="material-symbols-outlined">home </span>
        </a>

        <p class="text-white">
          > <a href="your_contact_link_here" class="text-white"> Contact</a>
        </p>
      </div>
    </div>
    <div class="mx-auto flex bg-primary justify-center">
      <div class="container p-8 md:p-40">
        <form action="action_page.php">
          <div
            class="flex flex-col md:flex-row justify-between p-6 bg-primary text-white"
          >
            <!-- Address -->
            <div class="flex-grow text-center bg-secondary p-4 md:p-20">
              <fa :icon="['fas', 'location-dot']" class="text-white text-5xl" />
              <p class="font-bold">Address</p>
              <p>Kenya, Nakuru</p>
            </div>

            <!-- Phone -->
            <div class="flex-grow text-center bg-secondary p-4 md:p-14">
              <fa :icon="['fas', 'phone']" class="text-white text text-4xl" />
              <p class="font-bold">Phone</p>
              <p>+254 712 345 678</p>
              <p>Mon - Sat: 8am - 10pm; Sun CLOSED</p>
            </div>

            <!-- Contact -->
            <div class="flex-grow text-center bg-secondary p-4 md:p-20">
              <fa :icon="['fas', 'message']" class="text-white text text-4xl" />
              <p class="font-bold">Contact</p>
              <p>advocatekenya@gmail.com</p>
              <!-- Add any additional contact information here -->
            </div>
          </div>

          <br /><br />

          <div class="flex flex-col md:flex-row">
            <!-- First Name Section -->
            <div class="w-full mb-4 md:w-1/2 md:mr-4">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                class="w-full p-2 border border-gray-300"
              />
            </div>

            <!-- Last Name Section -->
            <div class="w-full mb-4 md:w-1/2">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row">
            <!-- Email section -->
            <div class="w-full mb-4 md:w-1/2 md:mr-4">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email.."
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <!-- Phone Section -->
            <div class="w-full mb-4 md:w-1/2">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Your phone.."
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div class="mb-4">
            <!-- Subject Section -->
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject.."
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div class="mb-4">
            <!-- Message Section -->
            <textarea
              id="Message"
              name="Message"
              placeholder="Your Message.."
              style="height: 200px"
              class="w-full p-2 border border-gray-300 rounded resize-y"
            ></textarea>
          </div>

          <div class="bg-orange-500 p-4 rounded">
            <!-- Submit Button -->
            <input
              type="text"
              value="Submit Message"
              name="submit_message"
              placeholder="Submit Message"
              class="w-full p-2 text-white text-center font-bold bg-orange-500"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style></style>
