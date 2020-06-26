class ApartmentsController < ApplicationController
    before_action :authenticate_user!, only: [:create, :edit, :update, :destroy]

    def index
        apartments = Apartment.all
        render json: apartments
    end

    def show
        apartment = Apartment.find(params[:id])
        render json: apartment
    end

    def create
        apartment = Apartment.create(apt_params)
        if apartment.valid? 
            render json: apartment
        else
            render json: apartment.errors
        end
    end

    def destroy
        apartment = Apartment.find(params[:id])
        if apartment.destroy
            render json: apartment
        else
            render json: apartment.errors
        end
    end
    
    def update
        apartment = Apartment.find(params[:id])
        apartment.update(apt_params)
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors
        end
    end

    private
    def apt_params
        params.require(:apartment).permit(:street_num, :city, :state, :zip, :country, :mgr_name, :mgr_phone, :contact_hours, :user_id, :description, :picture_url)
    end

end
