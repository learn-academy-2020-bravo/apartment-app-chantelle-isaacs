class ApartmentsController < ApplicationController
    before_action :authenticate_user!

    def index
        @apartments = current_user.apartments.all
    end
    
    def new
    end
end
